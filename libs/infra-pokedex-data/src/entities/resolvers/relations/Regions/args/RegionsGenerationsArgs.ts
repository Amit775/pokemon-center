import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationsOrderByWithRelationInput } from "../../../inputs/GenerationsOrderByWithRelationInput";
import { GenerationsWhereInput } from "../../../inputs/GenerationsWhereInput";
import { GenerationsWhereUniqueInput } from "../../../inputs/GenerationsWhereUniqueInput";
import { GenerationsScalarFieldEnum } from "../../../../enums/GenerationsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RegionsGenerationsArgs {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GenerationsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GenerationsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: GenerationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GenerationsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "main_region_id" | "identifier"> | undefined;
}
