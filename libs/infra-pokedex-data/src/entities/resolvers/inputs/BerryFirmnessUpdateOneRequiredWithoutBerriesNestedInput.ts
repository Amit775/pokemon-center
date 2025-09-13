import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFirmnessCreateOrConnectWithoutBerriesInput } from "../inputs/BerryFirmnessCreateOrConnectWithoutBerriesInput";
import { BerryFirmnessCreateWithoutBerriesInput } from "../inputs/BerryFirmnessCreateWithoutBerriesInput";
import { BerryFirmnessUpdateToOneWithWhereWithoutBerriesInput } from "../inputs/BerryFirmnessUpdateToOneWithWhereWithoutBerriesInput";
import { BerryFirmnessUpsertWithoutBerriesInput } from "../inputs/BerryFirmnessUpsertWithoutBerriesInput";
import { BerryFirmnessWhereUniqueInput } from "../inputs/BerryFirmnessWhereUniqueInput";

@TypeGraphQL.InputType("BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput", {})
export class BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput {
  @TypeGraphQL.Field(_type => BerryFirmnessCreateWithoutBerriesInput, {
    nullable: true
  })
  create?: BerryFirmnessCreateWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessCreateOrConnectWithoutBerriesInput, {
    nullable: true
  })
  connectOrCreate?: BerryFirmnessCreateOrConnectWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessUpsertWithoutBerriesInput, {
    nullable: true
  })
  upsert?: BerryFirmnessUpsertWithoutBerriesInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessWhereUniqueInput, {
    nullable: true
  })
  connect?: BerryFirmnessWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BerryFirmnessUpdateToOneWithWhereWithoutBerriesInput, {
    nullable: true
  })
  update?: BerryFirmnessUpdateToOneWithWhereWithoutBerriesInput | undefined;
}
