import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryWhereInput } from "../inputs/BerryWhereInput";

@TypeGraphQL.InputType("BerryListRelationFilter", {})
export class BerryListRelationFilter {
  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  every?: BerryWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  some?: BerryWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryWhereInput, {
    nullable: true
  })
  none?: BerryWhereInput | undefined;
}
