import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormsUpdateInput } from "../../../inputs/PokemonFormsUpdateInput";
import { PokemonFormsWhereUniqueInput } from "../../../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonFormsArgs {
  @TypeGraphQL.Field(_type => PokemonFormsUpdateInput, {
    nullable: false
  })
  data!: PokemonFormsUpdateInput;

  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormsWhereUniqueInput;
}
