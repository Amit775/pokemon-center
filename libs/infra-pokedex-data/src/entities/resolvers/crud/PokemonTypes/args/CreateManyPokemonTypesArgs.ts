import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypesCreateManyInput } from "../../../inputs/PokemonTypesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonTypesArgs {
  @TypeGraphQL.Field(_type => [PokemonTypesCreateManyInput], {
    nullable: false
  })
  data!: PokemonTypesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
