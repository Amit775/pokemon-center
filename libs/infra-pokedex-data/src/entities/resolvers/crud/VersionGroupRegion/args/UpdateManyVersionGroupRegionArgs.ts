import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionUpdateManyMutationInput } from "../../../inputs/VersionGroupRegionUpdateManyMutationInput";
import { VersionGroupRegionWhereInput } from "../../../inputs/VersionGroupRegionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersionGroupRegionArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupRegionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionWhereInput, {
    nullable: true
  })
  where?: VersionGroupRegionWhereInput | undefined;
}
