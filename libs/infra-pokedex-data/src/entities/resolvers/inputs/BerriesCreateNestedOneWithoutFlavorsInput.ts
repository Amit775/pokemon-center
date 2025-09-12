import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateOrConnectWithoutFlavorsInput } from "../inputs/BerriesCreateOrConnectWithoutFlavorsInput";
import { BerriesCreateWithoutFlavorsInput } from "../inputs/BerriesCreateWithoutFlavorsInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesCreateNestedOneWithoutFlavorsInput", {})
export class BerriesCreateNestedOneWithoutFlavorsInput {
  @TypeGraphQL.Field(_type => BerriesCreateWithoutFlavorsInput, {
    nullable: true
  })
  create?: BerriesCreateWithoutFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateOrConnectWithoutFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: BerriesCreateOrConnectWithoutFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: true
  })
  connect?: BerriesWhereUniqueInput | undefined;
}
