import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateManyFirmnessInputEnvelope } from "../inputs/BerryCreateManyFirmnessInputEnvelope";
import { BerryCreateOrConnectWithoutFirmnessInput } from "../inputs/BerryCreateOrConnectWithoutFirmnessInput";
import { BerryCreateWithoutFirmnessInput } from "../inputs/BerryCreateWithoutFirmnessInput";
import { BerryWhereUniqueInput } from "../inputs/BerryWhereUniqueInput";

@TypeGraphQL.InputType("BerryCreateNestedManyWithoutFirmnessInput", {})
export class BerryCreateNestedManyWithoutFirmnessInput {
  @TypeGraphQL.Field(_type => [BerryCreateWithoutFirmnessInput], {
    nullable: true
  })
  create?: BerryCreateWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerryCreateOrConnectWithoutFirmnessInput], {
    nullable: true
  })
  connectOrCreate?: BerryCreateOrConnectWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => BerryCreateManyFirmnessInputEnvelope, {
    nullable: true
  })
  createMany?: BerryCreateManyFirmnessInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerryWhereUniqueInput], {
    nullable: true
  })
  connect?: BerryWhereUniqueInput[] | undefined;
}
