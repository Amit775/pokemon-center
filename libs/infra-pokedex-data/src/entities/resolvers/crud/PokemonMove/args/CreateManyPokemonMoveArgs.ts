import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveCreateManyInput } from "../../../inputs/PokemonMoveCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonMoveArgs {
  @TypeGraphQL.Field(_type => [PokemonMoveCreateManyInput], {
    nullable: false
  })
  data!: PokemonMoveCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
