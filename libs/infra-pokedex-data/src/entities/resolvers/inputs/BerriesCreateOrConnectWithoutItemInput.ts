import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateWithoutItemInput } from "../inputs/BerriesCreateWithoutItemInput";
import { BerriesWhereUniqueInput } from "../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.InputType("BerriesCreateOrConnectWithoutItemInput", {})
export class BerriesCreateOrConnectWithoutItemInput {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerriesCreateWithoutItemInput, {
    nullable: false
  })
  create!: BerriesCreateWithoutItemInput;
}
