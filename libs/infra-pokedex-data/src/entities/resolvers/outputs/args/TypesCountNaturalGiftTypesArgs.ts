import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerriesWhereInput } from "../../inputs/BerriesWhereInput";

@TypeGraphQL.ArgsType()
export class TypesCountNaturalGiftTypesArgs {
  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  where?: BerriesWhereInput | undefined;
}
