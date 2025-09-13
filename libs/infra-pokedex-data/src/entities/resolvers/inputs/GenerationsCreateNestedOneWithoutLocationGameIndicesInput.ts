import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutLocationGameIndicesInput } from "../inputs/GenerationsCreateOrConnectWithoutLocationGameIndicesInput";
import { GenerationsCreateWithoutLocationGameIndicesInput } from "../inputs/GenerationsCreateWithoutLocationGameIndicesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateNestedOneWithoutLocationGameIndicesInput", {})
export class GenerationsCreateNestedOneWithoutLocationGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutLocationGameIndicesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutLocationGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;
}
