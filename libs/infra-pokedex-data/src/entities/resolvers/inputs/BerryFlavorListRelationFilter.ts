import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorWhereInput } from "../inputs/BerryFlavorWhereInput";

@TypeGraphQL.InputType("BerryFlavorListRelationFilter", {})
export class BerryFlavorListRelationFilter {
  @TypeGraphQL.Field(_type => BerryFlavorWhereInput, {
    nullable: true
  })
  every?: BerryFlavorWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorWhereInput, {
    nullable: true
  })
  some?: BerryFlavorWhereInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorWhereInput, {
    nullable: true
  })
  none?: BerryFlavorWhereInput | undefined;
}
