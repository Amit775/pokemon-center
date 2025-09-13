import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutItemGameIndicesInput } from "../inputs/GenerationsCreateWithoutItemGameIndicesInput";
import { GenerationsUpdateWithoutItemGameIndicesInput } from "../inputs/GenerationsUpdateWithoutItemGameIndicesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpsertWithoutItemGameIndicesInput", {})
export class GenerationsUpsertWithoutItemGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutItemGameIndicesInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutItemGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutItemGameIndicesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutItemGameIndicesInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
