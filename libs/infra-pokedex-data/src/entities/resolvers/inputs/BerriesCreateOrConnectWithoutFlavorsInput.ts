import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateWithoutFlavorsInput } from "../inputs/BerriesCreateWithoutFlavorsInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesCreateOrConnectWithoutFlavorsInput", {})
export class BerriesCreateOrConnectWithoutFlavorsInput {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerriesCreateWithoutFlavorsInput, {
    nullable: false
  })
  create!: BerriesCreateWithoutFlavorsInput;
}
