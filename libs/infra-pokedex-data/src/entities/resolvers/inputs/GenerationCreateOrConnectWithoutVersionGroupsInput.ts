import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutVersionGroupsInput } from "../inputs/GenerationCreateWithoutVersionGroupsInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateOrConnectWithoutVersionGroupsInput", {})
export class GenerationCreateOrConnectWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutVersionGroupsInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutVersionGroupsInput;
}
