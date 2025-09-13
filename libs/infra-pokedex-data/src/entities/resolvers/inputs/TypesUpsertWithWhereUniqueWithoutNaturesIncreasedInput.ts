import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutNaturesIncreasedInput } from "../inputs/TypesCreateWithoutNaturesIncreasedInput";
import { TypesUpdateWithoutNaturesIncreasedInput } from "../inputs/TypesUpdateWithoutNaturesIncreasedInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpsertWithWhereUniqueWithoutNaturesIncreasedInput", {})
export class TypesUpsertWithWhereUniqueWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutNaturesIncreasedInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  create!: TypesCreateWithoutNaturesIncreasedInput;
}
