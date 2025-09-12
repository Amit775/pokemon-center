import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupsUpdateManyMutationInput } from "../../../inputs/VersionGroupsUpdateManyMutationInput";
import { VersionGroupsWhereInput } from "../../../inputs/VersionGroupsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
