import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorCreateWithoutTypeInput } from "../inputs/BerryFlavorCreateWithoutTypeInput";
import { BerryFlavorUpdateWithoutTypeInput } from "../inputs/BerryFlavorUpdateWithoutTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorUpsertWithWhereUniqueWithoutTypeInput", {})
export class BerryFlavorUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: BerryFlavorUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => BerryFlavorCreateWithoutTypeInput, {
    nullable: false
  })
  create!: BerryFlavorCreateWithoutTypeInput;
}
