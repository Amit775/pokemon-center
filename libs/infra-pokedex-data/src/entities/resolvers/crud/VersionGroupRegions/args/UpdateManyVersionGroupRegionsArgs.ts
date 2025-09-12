import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionsUpdateManyMutationInput } from "../../../inputs/VersionGroupRegionsUpdateManyMutationInput";
import { VersionGroupRegionsWhereInput } from "../../../inputs/VersionGroupRegionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersionGroupRegionsArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupRegionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereInput, {
    nullable: true
  })
  where?: VersionGroupRegionsWhereInput | undefined;
}
