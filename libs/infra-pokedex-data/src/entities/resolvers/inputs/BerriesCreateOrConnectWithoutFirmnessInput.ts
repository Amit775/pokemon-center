import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateWithoutFirmnessInput } from "../inputs/BerriesCreateWithoutFirmnessInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesCreateOrConnectWithoutFirmnessInput", {})
export class BerriesCreateOrConnectWithoutFirmnessInput {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerriesCreateWithoutFirmnessInput, {
    nullable: false
  })
  create!: BerriesCreateWithoutFirmnessInput;
}
