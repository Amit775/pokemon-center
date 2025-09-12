import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesCreateInput } from "../../../inputs/PokemonFormTypesCreateInput";
import { PokemonFormTypesUpdateInput } from "../../../inputs/PokemonFormTypesUpdateInput";
import { PokemonFormTypesWhereUniqueInput } from "../../../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonFormTypesArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateInput, {
    nullable: false
  })
  create!: PokemonFormTypesCreateInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateInput, {
    nullable: false
  })
  update!: PokemonFormTypesUpdateInput;
}
