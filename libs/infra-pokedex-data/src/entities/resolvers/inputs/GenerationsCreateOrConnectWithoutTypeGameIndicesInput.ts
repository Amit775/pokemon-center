import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutTypeGameIndicesInput } from "../inputs/GenerationsCreateWithoutTypeGameIndicesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateOrConnectWithoutTypeGameIndicesInput", {})
export class GenerationsCreateOrConnectWithoutTypeGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutTypeGameIndicesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutTypeGameIndicesInput;
}
