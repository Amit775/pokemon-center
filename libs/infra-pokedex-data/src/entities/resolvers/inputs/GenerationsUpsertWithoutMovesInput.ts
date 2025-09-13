import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutMovesInput } from "../inputs/GenerationsCreateWithoutMovesInput";
import { GenerationsUpdateWithoutMovesInput } from "../inputs/GenerationsUpdateWithoutMovesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpsertWithoutMovesInput", {})
export class GenerationsUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
