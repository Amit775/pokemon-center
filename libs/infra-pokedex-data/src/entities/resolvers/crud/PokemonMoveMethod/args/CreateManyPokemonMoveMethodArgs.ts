import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodCreateManyInput } from "../../../inputs/PokemonMoveMethodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => [PokemonMoveMethodCreateManyInput], {
    nullable: false
  })
  data!: PokemonMoveMethodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
