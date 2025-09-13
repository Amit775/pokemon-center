import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutItemGameIndicesInput } from "../inputs/GenerationsCreateWithoutItemGameIndicesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateOrConnectWithoutItemGameIndicesInput", {})
export class GenerationsCreateOrConnectWithoutItemGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutItemGameIndicesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutItemGameIndicesInput;
}
