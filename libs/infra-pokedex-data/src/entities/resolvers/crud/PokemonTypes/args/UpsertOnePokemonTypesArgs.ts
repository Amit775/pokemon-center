import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypesCreateInput } from "../../../inputs/PokemonTypesCreateInput";
import { PokemonTypesUpdateInput } from "../../../inputs/PokemonTypesUpdateInput";
import { PokemonTypesWhereUniqueInput } from "../../../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonTypesArgs {
  @TypeGraphQL.Field(_type => PokemonTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypesCreateInput, {
    nullable: false
  })
  create!: PokemonTypesCreateInput;

  @TypeGraphQL.Field(_type => PokemonTypesUpdateInput, {
    nullable: false
  })
  update!: PokemonTypesUpdateInput;
}
