import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorOrderByWithRelationInput } from "../../../inputs/BerryFlavorOrderByWithRelationInput";
import { BerryFlavorWhereInput } from "../../../inputs/BerryFlavorWhereInput";
import { BerryFlavorWhereUniqueInput } from "../../../inputs/BerryFlavorWhereUniqueInput";
import { BerryFlavorScalarFieldEnum } from "../../../../enums/BerryFlavorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBerryFlavorArgs {
  @TypeGraphQL.Field(_type => BerryFlavorWhereInput, {
    nullable: true
  })
  where?: BerryFlavorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BerryFlavorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: true
  })
  cursor?: BerryFlavorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"berry_id" | "contest_type_id" | "flavor"> | undefined;
}
