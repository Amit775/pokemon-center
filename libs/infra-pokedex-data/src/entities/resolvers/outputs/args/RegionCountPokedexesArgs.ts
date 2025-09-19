import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexWhereInput } from "../../inputs/PokedexWhereInput";

@TypeGraphQL.ArgsType()
export class RegionCountPokedexesArgs {
  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  where?: PokedexWhereInput | undefined;
}
