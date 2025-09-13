import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateManyFirmnessInputEnvelope } from "../inputs/BerriesCreateManyFirmnessInputEnvelope";
import { BerriesCreateOrConnectWithoutFirmnessInput } from "../inputs/BerriesCreateOrConnectWithoutFirmnessInput";
import { BerriesCreateWithoutFirmnessInput } from "../inputs/BerriesCreateWithoutFirmnessInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesCreateNestedManyWithoutFirmnessInput", {})
export class BerriesCreateNestedManyWithoutFirmnessInput {
  @TypeGraphQL.Field(_type => [BerriesCreateWithoutFirmnessInput], {
    nullable: true
  })
  create?: BerriesCreateWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => [BerriesCreateOrConnectWithoutFirmnessInput], {
    nullable: true
  })
  connectOrCreate?: BerriesCreateOrConnectWithoutFirmnessInput[] | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateManyFirmnessInputEnvelope, {
    nullable: true
  })
  createMany?: BerriesCreateManyFirmnessInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BerriesWhereUniqueInput], {
    nullable: true
  })
  connect?: BerriesWhereUniqueInput[] | undefined;
}
