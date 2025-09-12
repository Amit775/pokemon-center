import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesCreateManyInput } from "../../../inputs/PokemonMovesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonMovesArgs {
  @TypeGraphQL.Field(_type => [PokemonMovesCreateManyInput], {
    nullable: false
  })
  data!: PokemonMovesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
