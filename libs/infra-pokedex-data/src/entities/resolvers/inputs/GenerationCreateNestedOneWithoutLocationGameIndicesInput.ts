import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutLocationGameIndicesInput } from "../inputs/GenerationCreateOrConnectWithoutLocationGameIndicesInput";
import { GenerationCreateWithoutLocationGameIndicesInput } from "../inputs/GenerationCreateWithoutLocationGameIndicesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateNestedOneWithoutLocationGameIndicesInput", {})
export class GenerationCreateNestedOneWithoutLocationGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutLocationGameIndicesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutLocationGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutLocationGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;
}
