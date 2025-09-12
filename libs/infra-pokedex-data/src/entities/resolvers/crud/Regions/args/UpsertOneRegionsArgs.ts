import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionsCreateInput } from "../../../inputs/RegionsCreateInput";
import { RegionsUpdateInput } from "../../../inputs/RegionsUpdateInput";
import { RegionsWhereUniqueInput } from "../../../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRegionsArgs {
  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionsCreateInput, {
    nullable: false
  })
  create!: RegionsCreateInput;

  @TypeGraphQL.Field(_type => RegionsUpdateInput, {
    nullable: false
  })
  update!: RegionsUpdateInput;
}
