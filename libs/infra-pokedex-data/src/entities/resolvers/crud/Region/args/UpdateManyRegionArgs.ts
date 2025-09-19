import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionUpdateManyMutationInput } from "../../../inputs/RegionUpdateManyMutationInput";
import { RegionWhereInput } from "../../../inputs/RegionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRegionArgs {
  @TypeGraphQL.Field(_type => RegionUpdateManyMutationInput, {
    nullable: false
  })
  data!: RegionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;
}
