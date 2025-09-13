import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionsWhereInput } from "../../../inputs/RegionsWhereInput";

@TypeGraphQL.ArgsType()
export class PokedexesRegionArgs {
  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;
}
