import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormsCreateInput } from "../../../inputs/PokemonFormsCreateInput";
import { PokemonFormsUpdateInput } from "../../../inputs/PokemonFormsUpdateInput";
import { PokemonFormsWhereUniqueInput } from "../../../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonFormsArgs {
  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormsCreateInput, {
    nullable: false
  })
  create!: PokemonFormsCreateInput;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateInput, {
    nullable: false
  })
  update!: PokemonFormsUpdateInput;
}
