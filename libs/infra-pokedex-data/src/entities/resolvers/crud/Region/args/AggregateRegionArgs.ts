import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionOrderByWithRelationInput } from "../../../inputs/RegionOrderByWithRelationInput";
import { RegionWhereInput } from "../../../inputs/RegionWhereInput";
import { RegionWhereUniqueInput } from "../../../inputs/RegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRegionArgs {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RegionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RegionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  cursor?: RegionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
