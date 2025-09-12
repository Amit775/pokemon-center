import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodsCreateManyInput } from "../../../inputs/PokemonMoveMethodsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => [PokemonMoveMethodsCreateManyInput], {
    nullable: false
  })
  data!: PokemonMoveMethodsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
