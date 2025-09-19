import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutItemGameIndicesInput } from "../inputs/GenerationCreateWithoutItemGameIndicesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateOrConnectWithoutItemGameIndicesInput", {})
export class GenerationCreateOrConnectWithoutItemGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutItemGameIndicesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutItemGameIndicesInput;
}
