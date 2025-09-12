import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesUpdateInput } from "../../../inputs/PokemonFormTypesUpdateInput";
import { PokemonFormTypesWhereUniqueInput } from "../../../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonFormTypesArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateInput, {
    nullable: false
  })
  data!: PokemonFormTypesUpdateInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypesWhereUniqueInput;
}
