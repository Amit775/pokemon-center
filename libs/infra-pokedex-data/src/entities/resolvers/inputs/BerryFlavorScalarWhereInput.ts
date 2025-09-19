import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("BerryFlavorScalarWhereInput", {})
export class BerryFlavorScalarWhereInput {
  @TypeGraphQL.Field(_type => [BerryFlavorScalarWhereInput], {
    nullable: true
  })
  AND?: BerryFlavorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorScalarWhereInput], {
    nullable: true
  })
  OR?: BerryFlavorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryFlavorScalarWhereInput], {
    nullable: true
  })
  NOT?: BerryFlavorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  berry_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  contest_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  flavor?: IntFilter | undefined;
}
