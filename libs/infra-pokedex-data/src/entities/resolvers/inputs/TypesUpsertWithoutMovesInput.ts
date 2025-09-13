import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutMovesInput } from "../inputs/TypesCreateWithoutMovesInput";
import { TypesUpdateWithoutMovesInput } from "../inputs/TypesUpdateWithoutMovesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutMovesInput", {})
export class TypesUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutMovesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}
