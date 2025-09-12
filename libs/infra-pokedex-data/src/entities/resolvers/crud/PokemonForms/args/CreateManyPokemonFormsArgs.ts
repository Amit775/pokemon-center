import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormsCreateManyInput } from "../../../inputs/PokemonFormsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonFormsArgs {
  @TypeGraphQL.Field(_type => [PokemonFormsCreateManyInput], {
    nullable: false
  })
  data!: PokemonFormsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
