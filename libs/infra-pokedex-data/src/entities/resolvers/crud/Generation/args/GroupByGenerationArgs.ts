import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationOrderByWithAggregationInput } from "../../../inputs/GenerationOrderByWithAggregationInput";
import { GenerationScalarWhereWithAggregatesInput } from "../../../inputs/GenerationScalarWhereWithAggregatesInput";
import { GenerationWhereInput } from "../../../inputs/GenerationWhereInput";
import { GenerationScalarFieldEnum } from "../../../../enums/GenerationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGenerationArgs {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GenerationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GenerationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "main_region_id" | "identifier">;

  @TypeGraphQL.Field(_type => GenerationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GenerationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
