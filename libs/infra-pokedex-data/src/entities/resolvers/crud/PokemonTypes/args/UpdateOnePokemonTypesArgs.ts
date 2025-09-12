import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypesUpdateInput } from "../../../inputs/PokemonTypesUpdateInput";
import { PokemonTypesWhereUniqueInput } from "../../../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonTypesArgs {
  @TypeGraphQL.Field(_type => PokemonTypesUpdateInput, {
    nullable: false
  })
  data!: PokemonTypesUpdateInput;

  @TypeGraphQL.Field(_type => PokemonTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypesWhereUniqueInput;
}
