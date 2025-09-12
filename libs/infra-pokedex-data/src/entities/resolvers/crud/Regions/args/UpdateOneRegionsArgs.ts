import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionsUpdateInput } from "../../../inputs/RegionsUpdateInput";
import { RegionsWhereUniqueInput } from "../../../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRegionsArgs {
  @TypeGraphQL.Field(_type => RegionsUpdateInput, {
    nullable: false
  })
  data!: RegionsUpdateInput;

  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionsWhereUniqueInput;
}
