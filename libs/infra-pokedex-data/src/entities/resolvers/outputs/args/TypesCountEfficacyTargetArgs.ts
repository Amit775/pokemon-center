import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeEfficacyWhereInput } from "../../inputs/TypeEfficacyWhereInput";

@TypeGraphQL.ArgsType()
export class TypesCountEfficacyTargetArgs {
  @TypeGraphQL.Field(_type => TypeEfficacyWhereInput, {
    nullable: true
  })
  where?: TypeEfficacyWhereInput | undefined;
}
