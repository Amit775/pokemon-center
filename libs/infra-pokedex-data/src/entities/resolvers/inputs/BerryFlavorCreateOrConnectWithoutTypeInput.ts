import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateWithoutTypeInput } from "../inputs/BerryFlavorCreateWithoutTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorCreateOrConnectWithoutTypeInput", {})
export class BerryFlavorCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorCreateWithoutTypeInput, {
    nullable: false
  })
  create!: BerryFlavorCreateWithoutTypeInput;
}
