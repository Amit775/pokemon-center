import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessCreateOrConnectWithoutBerriesInput } from "../inputs/BerryFirmnessCreateOrConnectWithoutBerriesInput";
import { BerryFirmnessCreateWithoutBerriesInput } from "../inputs/BerryFirmnessCreateWithoutBerriesInput";
import { BerryFirmnessWhereUniqueInput } from "../inputs/BerryFirmnessWhereUniqueInput";

@TypeGraphQL.InputType("BerryFirmnessCreateNestedOneWithoutBerriesInput", {})
export class BerryFirmnessCreateNestedOneWithoutBerriesInput {
  @TypeGraphQL.Field(_type => BerryFirmnessCreateWithoutBerriesInput, {
    nullable: true
  })
  create?: BerryFirmnessCreateWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessCreateOrConnectWithoutBerriesInput, {
    nullable: true
  })
  connectOrCreate?: BerryFirmnessCreateOrConnectWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessWhereUniqueInput, {
    nullable: true
  })
  connect?: BerryFirmnessWhereUniqueInput | undefined;
}
