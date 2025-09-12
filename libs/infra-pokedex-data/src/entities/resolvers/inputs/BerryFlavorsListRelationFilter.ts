import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsWhereInput } from "../inputs/BerryFlavorsWhereInput";

@TypeGraphQL.InputType("BerryFlavorsListRelationFilter", {})
export class BerryFlavorsListRelationFilter {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereInput, {
    nullable: true
  })
  every?: BerryFlavorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsWhereInput, {
    nullable: true
  })
  some?: BerryFlavorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsWhereInput, {
    nullable: true
  })
  none?: BerryFlavorsWhereInput | undefined;
}
