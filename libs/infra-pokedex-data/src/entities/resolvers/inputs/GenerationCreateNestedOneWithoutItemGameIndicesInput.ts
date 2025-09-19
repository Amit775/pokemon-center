import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateOrConnectWithoutItemGameIndicesInput } from "../inputs/GenerationCreateOrConnectWithoutItemGameIndicesInput";
import { GenerationCreateWithoutItemGameIndicesInput } from "../inputs/GenerationCreateWithoutItemGameIndicesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateNestedOneWithoutItemGameIndicesInput", {})
export class GenerationCreateNestedOneWithoutItemGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationCreateWithoutItemGameIndicesInput, {
    nullable: true
  })
  create?: GenerationCreateWithoutItemGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateOrConnectWithoutItemGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutItemGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput | undefined;
}
