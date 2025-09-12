import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutLocationGameIndicesInput } from "../inputs/GenerationsCreateWithoutLocationGameIndicesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateOrConnectWithoutLocationGameIndicesInput", {})
export class GenerationsCreateOrConnectWithoutLocationGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutLocationGameIndicesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutLocationGameIndicesInput;
}
