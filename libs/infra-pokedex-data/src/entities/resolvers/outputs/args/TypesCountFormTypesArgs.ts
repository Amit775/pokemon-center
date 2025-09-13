import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesWhereInput } from "../../inputs/PokemonFormTypesWhereInput";

@TypeGraphQL.ArgsType()
export class TypesCountFormTypesArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereInput, {
    nullable: true
  })
  where?: PokemonFormTypesWhereInput | undefined;
}
