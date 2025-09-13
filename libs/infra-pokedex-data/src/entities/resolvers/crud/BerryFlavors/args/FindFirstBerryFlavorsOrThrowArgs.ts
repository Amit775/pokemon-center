import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorsOrderByWithRelationInput } from "../../../inputs/BerryFlavorsOrderByWithRelationInput";
import { BerryFlavorsWhereInput } from "../../../inputs/BerryFlavorsWhereInput";
import { BerryFlavorsWhereUniqueInput } from "../../../inputs/BerryFlavorsWhereUniqueInput";
import { BerryFlavorsScalarFieldEnum } from "../../../../enums/BerryFlavorsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBerryFlavorsOrThrowArgs {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereInput, {
    nullable: true
  })
  where?: BerryFlavorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BerryFlavorsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsWhereUniqueInput, {
    nullable: true
  })
  cursor?: BerryFlavorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"berry_id" | "contest_type_id" | "flavor"> | undefined;
}
